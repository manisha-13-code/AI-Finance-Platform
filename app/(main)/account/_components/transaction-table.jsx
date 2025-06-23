"use client"
import { Checkbox } from '@/components/ui/checkbox'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { categoryColors } from '@/Data/categories'
import React from 'react'

const TransactionTable = ({ transaction }) => {

    const filteredAndSortedTransactions = transaction;
    const handleSort = () => {

    }
    return (
        <div className='space-y-4'>
            {/* filters */}

            {/* Transactions */}
            <div className="rounded-md border">
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[50px]">
                                <Checkbox />
                            </TableHead>

                            <TableHead className="cursor-pointer"
                                onClick={() => handleSort("date")}
                            ><div className='flex items-center'>Date</div></TableHead>

                            <TableHead>Description</TableHead>

                            <TableHead className="cursor-pointer"
                                onClick={() => handleSort("category")}
                            ><div className='flex items-center'>Category</div></TableHead>

                            <TableHead className="cursor-pointer"
                                onClick={() => handleSort("amount")}
                            ><div className='flex items-center justify-end'>Amount</div></TableHead>
                            <TableHead>Recurring</TableHead>
                            <TableHead className="w-[50px]" />
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredAndSortedTransactions.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={7} className="text-center text-muted-foreground">
                                    No Transaction Found
                                </TableCell>
                            </TableRow>
                        ) : (

                            filteredAndSortedTransactions.map((transaction) => (
                                <TableRow key={transaction.id}>
                                <TableCell className="font-medium"><Checkbox /></TableCell>
                                <TableCell>{format(new Date(transaction.date), "PP")}</TableCell>
                                <TableCell>{transaction.description}</TableCell>
                                <TableCell className="captalize"><span style={{background: categoryColors}}>{transaction.category}</span></TableCell>
                            </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default TransactionTable
