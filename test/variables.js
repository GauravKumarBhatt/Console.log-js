const accountId = 14455354
let accountEmail = "gauravbhatt@microsoft.com"
var accountPassword = "12345"
accountCity = "Noida"
let accountState

accountEmail = "hdfc.com"
accountPassword = "56123"
accountCity = "Moradabad"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])