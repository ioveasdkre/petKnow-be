enum HttpStatusCode {
  OK = 200,
  BadRequest = 400,
  NotFound = 404,
  InternalServerError = 500,
}

enum HttpMessage {
  RetrieveSuccess = 'Retrieve Success',
  RetrieveFailure = 'Retrieve Failure',
  CreateSuccess = 'Create Success',
  CreateFailure = 'Create Failure',
  ModifySuccess = 'Modify Success',
  ModifyFailure = 'Modify Failure',
  DeleteSuccess = 'Delete Success',
  DeleteFailure = 'Delete Failure',
  NotFound = 'Not Found',
  BadRequest = 'Bad Request',
  Success = 'Success',
  Failure = 'Failure',
  SystemError = 'System error, please contact the system administrator',
  NoPage = 'No information on this page',
}

export { HttpStatusCode, HttpMessage };
