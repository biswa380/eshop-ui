export interface TokenRequest {
    code : string;
    grant_type : string;
    client_id : string;
    redirect_uri : string;
    code_verifier : string;
}
