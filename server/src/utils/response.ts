import { Context } from "koa";
import { StatusCode } from "./enum";

interface IRes {
  ctx: Context;
  statusCode?: number;
  data?: any;
  errorCode?: number;
  msg?: string;
}

const createRes = (params: IRes) => {
  params.ctx.status = params.statusCode! || StatusCode.OK;
  params.ctx.body = {
    error_code: params.errorCode || 0,
    data: params.data || null,
    msg: params.msg || "",
  };
};

export default createRes;
