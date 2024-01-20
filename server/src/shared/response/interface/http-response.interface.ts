export interface IHttpResponse<I> {
  readonly data: I | I[];
  readonly success: boolean;
  readonly message: string;
}
