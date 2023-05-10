enum HttpStatusCode {
  OK = 200,
  BadRequest = 400,
  NotFound = 404,
  InternalServerError = 500,
}

enum HttpMessage {
  RetrieveSuccess = '取得資料成功',
  RetrieveFailure = '取得資料失敗',
  CreateSuccess = '新增資料成功',
  CreateFailure = '新增資料失敗',
  ModifySuccess = '修改資料成功',
  ModifyFailure = '修改資料失敗',
  DeleteSuccess = '刪除資料成功',
  DeleteFailure = '刪除資料失敗',
  NotFound = '找不到資料',
  BadRequest = '錯誤的請求',
}

export { HttpStatusCode, HttpMessage };
