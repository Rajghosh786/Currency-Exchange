// sara details hum lenge markdown file se copy paste isme hum api call karna sikhenge and khud ka custom hooks banana bhi sikhenge kyuki hooks bhi to end of the day function hi h

//hooks ke components ko useCurrencyInfo.js hi save karna hai kyuki 90% of the time yeh js hi return karta hai aur acha habit yehi hai ki js hai to js hi save karna chahiye
// custom hooks bhi built in hooks use kar sakte hai aur sab hooks me (use) pehle likhte hai koi compulsion nai hai lekin likhe unspoken rule hai dekhne wale ko fatak se samjhta hai ki hook hai
// koi function optional argument leta hai humara wala nai leta humare wale ko currency ka info hi return karna padega everytime matlab ki kaunsa currency chahiye wo return karega everytime

//yaha humne useState ka default ek empty object dala hai ki incase agar kuch data nai aata hai to wo empty object ko loop karega fail nai hoga atleast contengency plan
// response me humne(response[currency]) currency ko array me likha hai kyuki uss api ko call karne ke baad wo hame ek object dera hai usme hume wapis currency ko target karna hai to dot se nai hoga array se hoga  and dependency me bhi currency pass kia hai matlab currency variable me change hua to yeh wapis hit hoga
// phir export default useCurrencyInfo kar diya jiss se pura method hi return hogaya, functionality design ki aur pura method hi return kar diya yaha humne custom hook design kar liya hai aage bhi hooks me aisa hi hoga hook bananyega aur wo pura return karta hai method ko



//InputBox.jsx me  (label, className = "",amount etc yeh sab hum user se lenge )yeh input hum user se lenge and classname empty hai aur woi humne back ticks me first div me pass kar diya hai in case user ko apna css dalna ho baki label (to from ) aur bohat sara humne input lia hai yaha aur meko pata hai ki isko pure jsx me hum kahi na kahi pass karenge
// sabse pehle {label} pass kia hai, phir amount enable ya disable hai waha humne {amountDisable} pass kia h and value hum {amount} se le lenge
// phir ek onChange event pass kia hai jisme agar onAmountChange hai to callback function run hoga (REMEMBER YEH BOHAT CHUTIYA SYNTAX HAI ONCLICK,ONCHANGE ISKO HUMESHA CALLBACK CHAIYE) e.target.value jo number format me change karke le lenge

//ohk abhi kya hai ki option me sirf usd hai to hum obviously loop karenge taki sab option mile api se to yeh option ke select me value pass karenge ya value lenge hum {selectCurrency} se jo by default usd hai, aur isme onChange event bhi pass karnege {onCurrencyChange} taki jab select ka currency change hoga to option bhi change hona chaiye na, woi same pehle check karenge empty to nai phir callback fire karenge(REMEMBER YEH BOHAT CHUTIYA SYNTAX HAI ONCLICK,ONCHANGE ISKO HUMESHA CALLBACK CHAIYE)lekin iss baar number me nai convert karenge kyuki currency name change kar rahe na to string hi mangta, (currency disable jo ki upar false pass kia hai hum wo bhi check kar rahe hai yaha zarurat nai thi bas production grade ki best practise hai)

// yeh thoda main hai kyuki looping apna weak hai yaha hum jo option FIELD hai usko loop kar rahe hai pura thoda wierd hai lekin research karenge, currencyOptions naam ke variable ko jo ki empty array hai usko loop karenge aur uske andar options tag ko rakhenge, last time sikha tha key pass karenge unique id jisko bolte hai key performance issue rokhta hai kyuki map hota hai to 1000 baar loop karta hai to hajar baar wo dom recreate karta hai issue ho sakta hai to key humesha compulsion hai react looping me(id lena chahiye agar database se lere hai to),(indi) pass kia hai argument and key bhi (indi) hai value to show hoga wo bhi (indi) hi hoga

//export karne ka 2 tarika hai ek hum starting se kar rahe hai export ka, dusra hai ki hum ek naya file banaye index.js ka aur usi me sab import kar lenge then sirf index.js hi import karna padega bade project me yeh acha hai

//yaha abhi hum ek naya hook dekhenge useId naam ka sab thik hai yaha lekin hum label me ek hook use karenge optimisation ke liye kyuki wo baar baar change hoga, kai baar unique id dena baar baar possible nai hota hai to yeh hook kaam me aata hai
//use karne ke liye (const amountInputId = useId()) return ke upar likh denge aur bind karne ke liye label me htmFor={amountInputId} use karenge and same id={amountInputId} me bhi denge bind ke liye,looping me key generate ke liye mat use karna

//abhi tak humne InputBox.jsx me sab variable create and pass kia hai abhi app.jsx me custom hook import karna hai and sab jagha pe place karna hai bohat sara STATES banana hai
//

//niche onsubmit me preventdefault tha jo ki reset kar deta hai isliye usme convert() daal diya hai uske baad input box me amount ={amount}, currencyOptions={options} callback fire kia hai taki waha kuch change ho to yaha bhi reflect ho jaye onCurrencyChange={(currency)=>{setAmount(amount)}} and selectCurrency ={from} lia hai, onAmountChange={(amount)=>{setAmount(amount)}}

//second input box ke liye bhi humne same cheez kia hai thoda bohat changes hai label="To", amount = {convertedAmount}, currencyOptions={options},onCurrencyChange={(currency)=>{setTo(currency)}}selectCurrency={from}amountDisable 

//niche convert text ko bhi functional banaya hai ko bhi banaya 



// looping smajha nai