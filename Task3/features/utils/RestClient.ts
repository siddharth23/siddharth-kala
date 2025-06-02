import supertest from "supertest";
import Logger from "./Logger";
import {getFeatureName, getScenarioName, getStepName, runWithContext} from './ScenarioContext';
import { globalFeatureName, globalScenarioName, globalStepName } from '../hooks/beforeAndAfterAll';

const TIMEDOUT=600000 // set it to 1 minute as int responspe is slow
 class RestClient {
     private static _instance: RestClient;
     private constructor() {
     }
     public static get Instance()
     {
         return this._instance || (this._instance = new this());
     }
     public async post(
         host: string,
         endpoint: string,
         data: any,
         header: any = { 'Content-Type': 'application/json' }
     ) {
         try {
             const response = await supertest(host)
                 .post("/api/v3"+endpoint)
                 .set(header)
                 .send(data)
                 .timeout(TIMEDOUT)
                 .redirects(5)
             await runWithContext(globalFeatureName, globalScenarioName, globalStepName, async () => {
                 Logger.log(
                     `FeatureName::${getFeatureName()};;ScenarioName::${getScenarioName()};;Step::${getStepName()};;Method::POST;;Endpoint::${host}/api/v3${endpoint};;Data::${JSON.stringify(
                         data
                     )};;ResponseStatus::${response.status};;Response::${JSON.stringify(response.body)};;`
                 );
             });

             return {
                 body: response.body,
                 status: response.status,
                 headers: response.headers,
             };
         } catch (error) {
             console.error('API Call Failed:', error);
             throw error;
         }
     }
     
     public async get(
         host: string,
         endpoint: string,
         header: any = { 'Content-Type': 'application/json' }
     ) {
         try {
             const response = await supertest(host)
                 .get("/api/v3"+endpoint)
                 .set(header)
                 .redirects(5)
                 .timeout(TIMEDOUT);
             await runWithContext(globalFeatureName, globalScenarioName, globalStepName, async () => {
                 Logger.log(
                     `FeatureName::${getFeatureName()};;ScenarioName::${getScenarioName()};;Step::${getStepName()};;Method::GET;;Endpoint::${host}/api/v3${endpoint};;Response::${JSON.stringify(response.body)};;ResponseStatus::${response.status};;}`
                 );
             });
             
             return {
                 body: response.body,
                 status: response.status,
                 headers: response.headers,
             };
         } catch (error) {
             console.error('GET API Call Failed:', error);
             throw error;
         }
     }
     
     public async getXML(
         host: string,
         endpoint: string,
         header: any = { 'Content-Type': 'application/json' }
     ) {
         try {
             const response = await supertest(host)
                 .get("/api/v3"+endpoint)
                 .set(header)
                 .redirects(5)
                 .timeout(TIMEDOUT);
             await runWithContext(globalFeatureName, globalScenarioName, globalStepName, async () => {
                 Logger.log(
                     `FeatureName::${getFeatureName()};;ScenarioName::${getScenarioName()};;Step::${getStepName()};;Method::GET;;Endpoint::${host}/api/v3${endpoint};;Response::${JSON.stringify(response.body)};;ResponseStatus::${response.status};;}`
                 );
             });
             
             return {
                 body: response.text,
                 status: response.status,
                 headers: response.headers,
             };
         } catch (error) {
             console.error('GET API Call Failed:', error);
             throw error;
         }
     }


     public async getResponseHeaders(
         host: string,
         endpoint: string,
         header: any = { 'Content-Type': 'application/json' }
     ) {

         try {
             const response = await supertest(host)
                 .get("/api/v3"+endpoint)
                 .set(header)
                 .redirects(5)
                 .timeout(TIMEDOUT);
             await runWithContext(globalFeatureName, globalScenarioName, globalStepName, async () => {
                 Logger.log(
                     `FeatureName::${getFeatureName()};;ScenarioName::${getScenarioName()};;Step::${getStepName()};;Method::GET;;Endpoint::${host}/api/v3${endpoint};;Response::${JSON.stringify(response.body)};;ResponseStatus::${response.status};;}`
                 );
             })

             return {
                 responseHeaders: response.header
             };
         } catch (error) {
             console.error('GET Response Header API Failed:', error);
             throw error;
         }
     }

     public async delete(
         host: string,
         endpoint: string,
         header: any = { 'Content-Type': 'application/json' }
     ) {
         try {
             const response = await supertest(host)
                 .delete("/api/v3"+endpoint)
                 .set(header)
                 .redirects(5)
                 .timeout(TIMEDOUT);
             await runWithContext(globalFeatureName, globalScenarioName, globalStepName, async () => {
                 Logger.log(
                     `FeatureName::${getFeatureName()};;ScenarioName::${getScenarioName()};;Step::${getStepName()};;Method::DELETE;;Endpoint::${host}/api/v3${endpoint};;ResponseStatus::${response.status};;}`
                 );
             })
             return {
                 body: response.body,
                 status: response.status,
                 headers: response.headers,
             };
         } catch (error) {
             console.error('DELETE API Call Failed:', error);
             throw error;
         }
     }

     public async patch(
         host: string,
         endpoint: string,
         header: any = { 'Content-Type': 'application/json' }
     ) {

         try {
             const response = await supertest(host)
                 .patch("/api/v3"+endpoint)
                 .set(header)
                 .redirects(5)
                 .timeout(TIMEDOUT);
             await runWithContext(globalFeatureName, globalScenarioName, globalStepName, async () => {
                 Logger.log(
                     `FeatureName::${getFeatureName()};;ScenarioName::${getScenarioName()};;Step::${getStepName()};;Method::PATCH;;Endpoint::${host}/api/v3${endpoint};;Response::${JSON.stringify(response.body)};;ResponseStatus::${response.status};;}`
                 );
             })
             return {
                 body: response.body,
                 status: response.status,
                 headers: response.headers,
             };
         } catch (error) {
             console.error('PATCH API Call Failed:', error);
             throw error;
         }
     }

     public async put(
         host: string,
         endpoint: string,
         data: any,
         header: any = { 'Content-Type': 'application/json' }
     ) {
       
         try {
             const response = await supertest(host)
                 .put("/api/v3"+endpoint)
                 .set(header)
                 .send(data)
                 .timeout(TIMEDOUT)
                 .redirects(5)
             await runWithContext(globalFeatureName, globalScenarioName, globalStepName, async () => {
                 Logger.log(
                     `FeatureName::${getFeatureName()};;ScenarioName::${getScenarioName()};;Step::${getStepName()};;Method::PUT;;Endpoint::${host}/api/v3${endpoint};;Data::${JSON.stringify(
                         data
                     )};;ResponseStatus::${response.status};;Response::${JSON.stringify(response.body)};;`
                 );
             });

             return {
                 body: response.body,
                 status: response.status,
                 headers: response.headers,
             };
         } catch (error) {
             console.error('PUT API Call Failed:', error);
             throw error;
         }
     }
 }
export default RestClient.Instance
