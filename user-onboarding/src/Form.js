import React from 'react';

export default function Forms(props){
    const { values, submit, change, disabled, errors } = props;

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
      }

    const onChange = evt => {

    const { name, value, checked, type } = evt.target;

    const valueToUse = type === "checkbox" ? checked : value;

    change(name, valueToUse);
    }

    return(
        <form>
            <div>
                <h2>Incoming User</h2>
                <div className='errors'>
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div>
            </div>
            <div>
                <h4>User's Information</h4>
                <label>Name: 
                    <input
                        value={values.username}
                        onChange={onChange}
                        name='username'
                        type='text'
                    />
                    </label>

                    <label>Email: 
                        <input
                            value={values.email}
                            onChange={onChange}
                            name='email'
                            type='text'
                        />
                    </label>
                    <label>Password: 
                        <input
                            value={values.password}
                            onChange={onChange}
                            name='password'
                            type='text'
                        />
                    </label>
                    <label>By click the checkbox you are agreeing to our <strong>Terms</strong> and <strong>Conditions</strong>.
                        <input
                        type="checkbox"
                        name="terms"
                        checked={values.terms}
                        onChange={onChange}
                        />
                        </label>
            </div>
            <div><button disabled={disabled} id="submitBtn">Submit</button></div>
        </form>
    )
}