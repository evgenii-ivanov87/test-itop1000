import { createAction } from '@reduxjs/toolkit';

export const fetchConvertRequest = createAction(
    'convert/fetchConvertRequest'
  );
  export const fetchConvertSuccess = createAction(
    'convert/fetchConvertSuccess'
  );
  export const fetchConvertError = createAction('convert/fetchConvertError');

