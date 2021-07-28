import { Controller, Get, Patch, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('api/v1/task')
export class TaskController {
    @Post()
    postMethod(@Req() req: Request){
        return `method ${req.method}`;
    }

    @Get('done')
    getMethod(@Req() req: Request){
        return `method ${req.method}`;
    }

    @Put()
    putMethod(@Req() req: Request){
        return `method ${req.method}`;
    }

    @Patch()
    pathMethod(@Req() req: Request){
        return `method ${req.method}`;
    }
    
}
