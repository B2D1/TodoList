const handleRes = params => {
    const _params = Object.assign(
        {
            ctx: null,
            status_code: 200,
            data: [],
            error_code: 0,
            msg: 'ok',
            request: `${params.ctx.method} ${params.ctx.url}`,
        },
        params
    )
    if (`${_params.status_code}`.startsWith('2')) {
        _params.ctx.response.status = _params.status_code
        _params.ctx.body = {
            error_code: _params.error_code,
            data: _params.data,
            msg: _params.msg,
            request: _params.request,
        }
    } else {
        _params.ctx.response.status = _params.status_code
        _params.ctx.body = {
            error_code: _params.error_code,
            msg: _params.msg,
            request: _params.request,
        }
    }
}

module.exports = handleRes
