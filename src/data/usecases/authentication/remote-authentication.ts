import { HttpPostClient } from "../../protocols/http/http-post-client"
import { AuthenticationParams } from "../../../domain/usecases/authetication"

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) { }
  
  async auth(params: AuthenticationParams): Promise<void> {
    await this.httpPostClient.post({url: this.url, body:params})
    return Promise.resolve()
  }
 }