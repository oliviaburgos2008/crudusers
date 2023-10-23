const EMAIL_VALIDATIONS = {    
            required: {
            value: true,
            message: "This field is required",
          },
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Wrong email format",
      },
    }

    const FULL_NAME_VALIDATIONS = {
        
            required: {
              value: true,
              message: "This field is required",
            },
            maxLength: {
              value: 25,
              message: "Maximum 25 characters",
            },
          }
    
    const PASSWORD_VALIDATIONS = {
        
            required: {
                value: true,
                message: "This field is required",
              },
              minLength:  {
                value: 8,
                message: "Minimum 8 characters",
              },

        }
    

export {
    EMAIL_VALIDATIONS,
    FULL_NAME_VALIDATIONS,
    PASSWORD_VALIDATIONS
}