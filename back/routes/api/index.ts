import express, { Request, Response } from 'express';

const router= express.Router()

const getAgencies = (_req: Request,res: Response) => res.json({
    data: [
        {
            type: 'agencies',
            id: 1,
            attributes: {
            name: 'agency1',
            desc: 'first agency',
            },
            links: {
            self: `http://localhost:3000/api/agency/1`,
            },
        },
        {
            type: 'agencies',
            id: 2,
            attributes: {
            name: 'agency2',
            desc: 'second agency',
            },
            links: {
            self: `http://localhost:3000/api/agency/2`,
            },
        },
        {
            type: 'agencies',
            id: 3,
            attributes: {
            name: 'agency3',
            desc: 'third agency',
            },
            links: {
            self: `http://localhost:3000/api/agency/3`,
            },
        },
    ],  
    links: {
        self: "http://example.com/agencies?page[number]=1&page[size]=1",
        first: "http://example.com/agencies?page[number]=1&page[size]=1",
        prev: "http://example.com/agencies?page[number]=1&page[size]=1",
        next: "http://example.com/agencies?page[number]=1&page[size]=1",
        last: "http://example.com/agencies?page[number]=13&page[size]=1"
    }
});

router.route('/agencies').get(getAgencies)
        
export default router;
