export const CATEGORIES = {
	FETCH_RESPONSE_OK: 'FETCH_RESPONSE_OK',
	FETCH_RESPONSE_ERROR: 'FETCH_RESPONSE_ERROR',
	FETCH_NETWORK_ERROR: 'FETCH_NETWORK_ERROR',
	NODE_SYSTEM_ERROR: 'NODE_SYSTEM_ERROR',
	CUSTOM_ERROR: 'CUSTOM_ERROR',
};

// HTTP status code
// http://www.restapitutorial.com/httpstatuscodes.html
export const ERROR_STATUS_TEXT_MAP = {
	'400': 'BAD_REQUEST',
	'401': 'UNAUTHORISED',
	// '402': 'PAYMENT_REQUIRED',
	'403': 'FORBIDDEN',
	'404': 'NOT_FOUND',
	// '405': 'METHOD_NOT_ALLOWED',
	// '406': 'NOT_ACCEPTABLE',
	// '407': 'PROXY_AUTHENTICATION_REQUIRED',
	'408': 'REQUEST_TIMEOUT',
	'409': 'CONFLICT',
	'500': 'INTERNAL_SERVER_ERROR',
	// '501': 'NOT_IMPLEMENTED',
	'502': 'BAD_GATEWAY',
	'503': 'SERVICE_UNAVAILABLE',
	'504': 'GATEWAY_TIMEOUT',
};

export default {
	CATEGORIES,
	ERROR_STATUS_TEXT_MAP,
};
