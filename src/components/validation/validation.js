import React from "react";


export const required = value => (value ? undefined : 'Field is required')

export const maxLenghtCreator = (maxLength) => (value) =>
    (value.length > maxLength ? `Max lenght is ${maxLength} symbols` : undefined)