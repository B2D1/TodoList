import { Context } from 'koa';

interface IRes {
  ctx: Context;
  status_code?: number;
  data?: any;
  error_code?: number;
  msg?: string;
  request?: string;
}

const handleRes = (params: IRes) => {
  const handleParams = Object.assign(
    {
      ctx: null,
      status_code: 200,
      data: {},
      error_code: 0,
      msg: '',
      request: `${params.ctx.method} ${params.ctx.url}`
    },
    params
  );
  if (`${handleParams.status_code}`.startsWith('2')) {
    handleParams.ctx.response.status = handleParams.status_code;
    handleParams.ctx.body = {
      error_code: handleParams.error_code,
      data: handleParams.data,
      msg: handleParams.msg,
      request: handleParams.request
    };
  } else {
    handleParams.ctx.response.status = handleParams.status_code;
    handleParams.ctx.body = {
      error_code: handleParams.error_code,
      msg: handleParams.msg,
      request: handleParams.request
    };
  }
};

export default handleRes;
