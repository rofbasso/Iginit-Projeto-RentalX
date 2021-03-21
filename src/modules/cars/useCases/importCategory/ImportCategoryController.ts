import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
    constructor(private importCategoryUsecCase: ImportCategoryUseCase) { }

    handle(request: Request, response: Response): Response {
        const { file } = request;

        this.importCategoryUsecCase.execute(file);

        return response.send();
    }
}

export { ImportCategoryController }