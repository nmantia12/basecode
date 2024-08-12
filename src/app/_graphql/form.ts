export const FORM_FIELDS = `
id
title
fields {
  ... on Text {
    name
    label
    width
    defaultValueString: defaultValue
    required
    id
    blockName
    blockType
  }
  ... on Textarea {
    name
    label
    width
    defaultValueString: defaultValue
    required
    id
    blockName
    blockType
  }
  ... on Select {
    name
    label
    width
    defaultValueString: defaultValue
    required
    id
    blockName
    blockType
    options {
      label
      value
      id
    }
  }
  ... on Email {
    name
    label
    width
    required
    id
    blockName
    blockType
  }
  ... on State {
    name
    label
    width
    required
    id
    blockName
    blockType
  }
  ... on Country {
    name
    label
    width
    required
    id
    blockName
    blockType
  }
  ... on Number {
    name
    label
    width
    defaultValueFloat: defaultValue
    required
    id
    blockName
    blockType
  }
  ... on Checkbox {
    name
    label
    width
    required
    defaultValueBoolean: defaultValue
    id
    blockName
    blockType
  }
}
submitButtonLabel
confirmationType
confirmationMessage
redirect {
  url
}
emails {
  emailTo
  cc
  bcc
  replyTo
  emailFrom
  subject
  message
  id
}
updatedAt
createdAt
`

export const FORM = `form {
  ${FORM_FIELDS}
}`
