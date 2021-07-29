import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { TaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('api/v1/task')
export class TaskController {
    @Post('post')
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
    
    @Delete()
    deleteMethod(@Req() req: Request){
        return `method ${req.method}`;
    }

    @Post(':id')
    paramMethod1(@Param('id') id: string){
        return {id};
    }

    @Post(':id/description/:description/isdone/:isdone')
    testParamMethod2(@Param() param: any){
        return { param };
    }

    @Post('param3/:id/description/:description/isdone/:isdone')
    paramMethod3(
      @Param('id') id: number,
      @Param('description') description: string,
      @Param('isdone') isdone: boolean)
    {
        return { id, description, isdone };
    }

    @Post('query/1')
    queryMethod1(
      @Query('id') id: number,
      @Query('description') description: string,
      @Query('isdone') isdone: boolean)
    {
        return { id, description, isdone };
    }

    @Post('query/2')
    queryMethod2(
      @Query() query: any
    )
    {
        return { query };
    }

    @Post('body/1')
    bodyMethod1(@Body() body: any)
    {
        return body;
    }

    @Post('body/2')
    bodyMethod2(@Body() body: any)
    {
        return { body };
    }

    @Post('body/3')
    bodyMethod3(@Body('description') description: any)
    {
        return { description };
    }

    constructor(private readonly taskService:TaskService) {}
    @Post()
    createTask(@Body() taskDTO: TaskDTO)
    {
        return this.taskService.createTask(taskDTO);
    }

    @Get()
    findAll(){
        return this.taskService.findAll();
    }

}
