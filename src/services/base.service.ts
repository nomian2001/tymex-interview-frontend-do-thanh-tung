import axios, {
    AxiosError,
    AxiosHeaders,
    AxiosInstance,
    AxiosRequestConfig,
    AxiosRequestHeaders,
    AxiosResponse,
    HeadersDefaults,
    InternalAxiosRequestConfig,
    RawAxiosRequestHeaders,
} from 'axios';

import { IPaginationResponse } from '../types';
// Utils

type IHeaderConfig = AxiosRequestHeaders | RawAxiosRequestHeaders | AxiosHeaders | Partial<HeadersDefaults>;

interface IConfigHttp {
    baseUrl: string;
    url: string;
    headerConfigs?: IHeaderConfig;
}

export class ApiBase {
    private axiosInstance!: AxiosInstance;
    private _baseUrl: string;
    private _url: string;
    private _headerConfigs: IHeaderConfig;

    constructor(config: IConfigHttp) {
        try {
            const { baseUrl, headerConfigs = {}, url } = config;

            // Validate config fields to make sure they are correctly provided
            if (!baseUrl || !url) {
                throw new Error('baseUrl and url are required');
            }

            this._baseUrl = baseUrl;
            this._url = url;
            this._headerConfigs = headerConfigs;

            this.initializeAxiosInstance(config);

            this.setupInterceptors();
        } catch (error) {
            throw new Error('Error when creating http instance');
        }
    }

    private initializeAxiosInstance(config: IConfigHttp) {
        const { baseUrl, headerConfigs = {} } = config;

        this.axiosInstance = axios.create({
            baseURL: baseUrl,
            headers: {
                'Content-Type': 'application/json',
                ...headerConfigs,
            },
        });
    }

    private setupInterceptors() {
        this.axiosInstance.interceptors.request.use(
            (config: InternalAxiosRequestConfig<any>) => {
                return config;
            },
            (error: AxiosError) => Promise.reject(error)
        );

        this.axiosInstance.interceptors.response.use(
            (response: AxiosResponse) => response,
            this.handleErrorResponseInterceptor
        );
    }

    private handleErrorResponseInterceptor = async (error: AxiosError): Promise<any> => {
        const { response } = error;

        return Promise.reject(response?.data || error);
    };


    private mergeHeaderConfigs(config?: AxiosRequestConfig): AxiosRequestConfig {
        const defaultHeaders = this.axiosInstance.defaults.headers;

        const headers = {
            ...defaultHeaders,
            ...this._headerConfigs,
            ...config?.headers,
        };

        return {
            ...config,
            ...headers,
        };
    }

    async get<T>(url: string, config?: AxiosRequestConfig) {
        const concatUrl = this._url + url;

        const updatedHeaderConfigs = this.mergeHeaderConfigs(config);

        return await this.axiosInstance.get<IPaginationResponse<T>>(concatUrl, updatedHeaderConfigs);
    }   
}
