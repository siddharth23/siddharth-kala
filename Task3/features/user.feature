Feature: Users

  Scenario Outline: Able to create a user
    When I POST <requestBody> <endpoint> with header <header> 
    Then Status should be <status>
    Then Response body be like <requestBody>
    Examples: 
    |requestBody|endpoint     |header             |status |
    |{"id":0,"username":"sid","firstNamer":"Siddharth","lastName":"Kala","email":"sidd@email.com","password":"8793","phone":"8793423239","userStatus":1} |/user|defaultHeader|200|
    #|{}|/api/v3/user| defaultHeader| 400|{"error":"not found"}|
    
    Scenario Outline: Able to create multiple users
      When I POST <requestBody> <endpoint> with header <header> 
      Then Status should be <status>
      Then Response body be like <requestBody>
    Examples: 
    |requestBody|endpoint     |header             |status |
    |[{"id":0,"username":"multi1","firstName":"Multi1","lastName":"Kala","email":"multi1@email.com","password":"8793","phone":"8793423239","userStatus":1},{"id":0,"username":"multi2","firstName":"Multi2","lastName":"kala","email":"multi2@email.com","password":"8793","phone":"8793423239","userStatus":1}] |/user/createWithList|defaultHeader|200|
    #|{}|/api/v3/user| defaultHeader| 400|
  
    Scenario Outline: Able to login and logout
      When I FETCH XML <loginEndpoint> with header <header>
      Then Status should be <status>
      When I GET <logoutEndpoint> with header <header>
      Then Status should be <status>
     
    Examples: 
    |loginEndpoint                            |logoutEndpoint |header                        |status |
    |/user/login?username=multi1&password=1234|/user/logout   |{"accept": "application/xml"} |400    |
    |/user/login?username=multi1&password=8793|/user/logout   |{"accept": "application/xml"} |200    |
    #|{}|/api/v3/user| defaultHeader| 400|
  
    Scenario Outline: Able to fetch user
      When I FETCH XML <endpoint> with header <header>
      Then Status should be <status>
      Then Response body xml be like <requestBody> if status is <status>
    Examples: 
    |endpoint      |header                        |status |requestBody           |
    |/user/multi3  |{"accept": "application/xml"} |404    |                      |
    |/user/multi1  |{"accept": "application/xml"} |200    | user_data_valid.xml  |
    #|{}|/api/v3/user| defaultHeader| 400|
    
    
   