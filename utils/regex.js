const EMAIL_REGEX_TEMPLATE = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
const TEL_REGEX_TEMPLATE = /^\+?(?:[0-9](\s|-)?){6,16}$/
const PASSWORD_REGEX_TEMPLATE = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/

export {
  EMAIL_REGEX_TEMPLATE,
  TEL_REGEX_TEMPLATE,
  PASSWORD_REGEX_TEMPLATE
}
