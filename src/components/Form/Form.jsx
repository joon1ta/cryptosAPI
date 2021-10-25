import React from 'react'
import styles from './Form.module.css'

export function validate(input) {
    let errors = [];
    if(!input.coinName) {
      errors.coinName = "coinName is required";
    } else if(!/\S+@\S+\.\S+/.test(input.coinName)) {
      errors.coinName = 'coinName is invalid'
    }
  
    if(!input.password) {
      errors.password = "Password is required";
    } else if((!/(?=.*[0-9])/.test(input.password))) {
      errors.password = 'Pasword is invalid'
    }
  
    return errors
  }


function Form() {
    
    const [input, setInput] = React.useState({coinName: '', password: ''})
    const [errors, setErrors] = React.useState({})
    
    const handleInputChange = function(e) {
      setInput(prevInput => ({...prevInput, [e.target.name]: e.target.value}))
    
      let errors = validate({...input, [e.target.name]:e.target.value})
      setErrors(errors)
    }


    return (
        <form>
        <div>
          <label>Nombre de la Coin:</label>
          <input  type="text" 
                  name="coinName" 
                  value={input.coinName} 
                  onChange={handleInputChange}
                  className={errors.coinName && styles.danger}/>
                  {
                    errors.coinName && (<p className={styles.danger}>{errors.coinName}</p>)
                  }
        </div>
        <div>
          <label>Symbol:</label>
          <input type="password" name="password" value={input.password} onChange={handleInputChange} className={errors.password && styles.danger}/>
          {
                    errors.password && (<p className={styles.danger}>{errors.password}</p>)
                  }
        </div>
      </form>
    )
                }

export default Form
