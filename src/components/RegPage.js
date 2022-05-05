import React, {useState} from 'react'

const RegPage = () => {
    /*
      onConsumerSubmit = (event) => {
        //code to send new consumer user registration to database
      }
    */

    /*
      onAdminSubmit = (event) => {
        //code to send new admin user registration to database
      }
    */

      //consumer data
      const [Fname, setFname] = useState('') //stores First name entered
      const [Lname, setLname] = useState('') //stores Last name entered
      const [Address, setAddress] = useState('') //stores aaddress entered
      const [Phonenumber, setNumber] = useState('') //stores phone number entered
      const [Email, setEmail] = useState('') //stores email entered
      const [Password, setPassword] = useState('') //stores password entered

      //admin data
      const [AFname, setAFname] = useState('') //stores admin First name entered
      const [ALname, setALname] = useState('') //stores admin Last name entered
      const [APassword, setAPassword] = useState('') //stores admin password entered

      const handleFnameChange = (event) => {
        setFname(event.target.value)
        console.log(Fname)
      }

      const handleLnameChange = (event) => {
        setLname(event.target.value)
        console.log(Lname)
      }

      const handleAddressChange = (event) => {
        setAddress(event.target.value)
        console.log(Address)
      }

      const handleNumberChange = (event) => {
        setNumber(event.target.value)
        console.log(Phonenumber)
      }

      const handleEmailChange = (event) => {
        setEmail(event.target.value)
        console.log(Email)
      }

      const handlePasswordChange = (event) => {
        setPassword(event.target.value)
        console.log(Password)
      }

      //handle admin inputs
      const handleAFnameChange = (event) => {
        setAFname(event.target.value)
        console.log(Fname)
      }

      const handleALnameChange = (event) => {
        setALname(event.target.value)
        console.log(Lname)
      }

      const handleAPasswordChange = (event) => {
        setAPassword(event.target.value)
        console.log(Lname)
      }

      return (
        <div>
          <h1>Consumer Registration</h1>
          <form /*onSubmit={onConsumerSubmit} */>
              <input type="text" id="Fname" placeholder='First name' value={Fname} onChange={handleFnameChange} />
              <br />
              <input type="text" id="Lname" placeholder='Last name' value={Lname} onChange={handleLnameChange} />
              <br />
              <input type="text" id="Address" placeholder='Address' value={Address} onChange={handleAddressChange} />
              <br />
              <input type="tel" id="Phonenumber" placeholder='Phone Number' value={Phonenumber} onChange={handleNumberChange} />
              <br />
              <input type="email" id="email" placeholder='E-mail' value={Email} onChange={handleEmailChange} />
              <br />
              <input type="password" id="Password" placeholder='Password' value={Password} onChange={handlePasswordChange} />
              <br />
              <input type="submit"/>
          </form>

          <h1>Admin Registration</h1>
          <form /*onSubmit={onAdminSubmit} */>
              <input type="text" id="AFname" placeholder='First name' value={AFname} onChange={handleAFnameChange}/>
              <br />
              <input type="text" id="ALname" placeholder='Last name' value={ALname} onChange={handleALnameChange}/>
              <br />
              <input type="password" id="APassword" placeholder='Password' value={APassword} onChange={handleAPasswordChange}/>
              <br />
              <input type="submit"/>
          </form>
        </div>
      );
    }
    //address phone email password
    export default RegPage