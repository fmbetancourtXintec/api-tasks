import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('api/v1/task')
export class TaskController {
    // @Post()
    // postMethod(@Req() req: Request){
    //     return `method ${req.method}`;
    // }

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
    
    @Delete()
    deleteMethod(@Req() req: Request){
        return `method ${req.method}`;
    }

    @Post(':id')
    testParamMethod1(@Param('id') id: string){
        return {id};
    }

    // @Post(':id/description/:description/isdone/:isdone')
    // testParamMethod2(@Param() param: any){
    //     return { param };
    // }

    @Post(':id/description/:description/isdone/:isdone')
    testParamMethod3(
      @Param('id') id: number,
      @Param('description') description: string,
      @Param('isdone') isdone: boolean)
    {
        return { id, description, isdone };
    }

    // @Post()
    // queryMethod1(
    //   @Query('id') id: number,
    //   @Query('description') description: string,
    //   @Query('isdone') isdone: boolean)
    // {
    //     return { id, description, isdone };
    // }

    // @Post()
    // queryMethod2(
    //   @Query() query: any
    // )
    // {
    //     return { query };
    // }

    // @Post()
    // bodyMethod1(@Body() body: any)
    // {
    //     return body;
    // }

    @Post()
    bodyMethod2(@Body('description') description: any)
    {
        return { description };
    }

}
