import { When, Then } from '@cucumber/cucumber';
import dotenv from 'dotenv';
import assert from "node:assert";
import RestClient from "../utils/RestClient";
import DataValidator from "../utils/DataValidator";
import fs from 'fs';
import { parseStringPromise } from 'xml2js';
import path from "path";
dotenv.config();
const baseUrl = process.env.API_BASE_URL || 'http://localhost:8080';

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

When(/^I GET (.*) with header (.*)$/, async function (endpoint: string,header:any) {
  let defaultHeader=[{"accept": "application/json","Content-Type":"application/json"}]
  let headers=(header==="defaultHeader")?defaultHeader:JSON.parse(header)
  this.response = await RestClient.get(baseUrl, endpoint,headers);
});

When(/^I FETCH XML (.*) with header (.*)$/, async function (endpoint: string,header:any) {
  let defaultHeader=[{"accept": "application/json","Content-Type":"application/json"}]
  let headers=(header==="defaultHeader")?defaultHeader:JSON.parse(header)
  this.response = await RestClient.getXML(baseUrl, endpoint,headers);
});

When(/^I POST (.*) (.*) with header (.*)$/, async function (data:any,endpoint:string,header:any) {
  let defaultHeader=[{"accept": "application/json","Content-Type":"application/json"}]
  let headers=(header==="defaultHeader")?defaultHeader:header
  let requestBody=JSON.parse(data)
  if(!Array.isArray(requestBody))
    requestBody.id=getRandomInt(1,10)
  else{
    for (let i=0;i<requestBody.length;i++){
      requestBody[i].id=getRandomInt(1,10)
    }
  }
  console.log(requestBody)
  this.response = await RestClient.post(baseUrl,endpoint,requestBody,headers);
});

Then(/^Status should be (.*)$/, async function (status:number) {
  assert.equal(this.response.status,status,"Expected was "+status+" but received status: "+this.response.status)
});

Then(/^Response body be like (.*)$/, async function (body:number) {
  let responseSchema=DataValidator.getSchema(this.response.body)
  let expectedSchema=DataValidator.getSchema(this.response.body)
  assert.ok(DataValidator.compareSchemas(responseSchema, expectedSchema).length === 0,"Json schema is different than expected "+DataValidator.compareSchemas(responseSchema, expectedSchema))
});

Then(/^Response body xml be like (.*) if status is (.*)$/, async function (body:string,status:string) {
  if(Number(status)===200){
    const expectedXmlPath =  path.join(__dirname, './', body);
    const expectedXml = fs.readFileSync(expectedXmlPath, 'utf-8');
    const expectedObj = await parseStringPromise(expectedXml);
    const actualObj = await parseStringPromise(this.response.body);
    assert.deepEqual(removeIdField(expectedObj),removeIdField(actualObj));
  }
  });

function removeIdField(obj: any) {
  if (typeof obj !== 'object' || obj === null) return;

  if ('id' in obj) {
    delete obj['id'];
  }

  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      obj[key].forEach(removeIdField);
    } else if (typeof obj[key] === 'object') {
      removeIdField(obj[key]);
    }
  }
}
