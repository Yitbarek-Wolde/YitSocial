import { ErrorWithStatus } from './error'
import express, { NextFunction, Response, Request } from 'express'

export function ServerError(error: unknown, req: Request, res: Response, next: NextFunction) {
    if (error instanceof ErrorWithStatus) {
        res.status(error.status).send(error.message)
    } else if (error instanceof Error) {
        res.status(500).send(error.message)
    } else {
        res.status(500).send("Unexpected error occurred")
    }
}