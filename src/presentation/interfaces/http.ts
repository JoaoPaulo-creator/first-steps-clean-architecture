export type HttpResponse<T = any> = {
  statusCode: number;
  data: T;
};

// isso aqui sao helpers, assim posso reutiliza-los em meus controllers
export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  data: error.stack,
});

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  data,
});

export const created = (data: any): HttpResponse => ({
  statusCode: 201,
  data,
});

export const noContent = (data: any): HttpResponse => ({
  statusCode: 204,
  data,
});

export const notFound = (data?: any): HttpResponse => ({
  statusCode: 404,
  data,
});

export const badRequest = (data: any): HttpResponse => ({
  statusCode: 400,
  data,
});
