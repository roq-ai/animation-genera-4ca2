import * as yup from 'yup';

export const assetValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  project_id: yup.string().nullable(),
});
