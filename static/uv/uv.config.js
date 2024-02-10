self.__uv$config = {
    prefix: 'UV-Static/static/tiw/',
    bare:'https://bare.benrogo.net',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'UV-Static/static/uv/uv.handler.js',
    bundle: 'UV-Static/static/uv/uv.bundle.js',
    config: 'UV-Static/static/uv/uv.config.js',
    sw: 'UV-Static/static/uv/uv.sw.js',
};
