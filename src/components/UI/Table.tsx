import React from 'react';

interface IProps {
    title: string;
    rows: Array<any>;
    headers: Array<any>;
}

const UITable: (props: IProps) => JSX.Element = (props: IProps) => (
    <div>
        <header>{props.title}</header>
        <table>
            <thead>
                <tr>
                    {props.headers.map((header, index) => {
                        return <th key={index}>{header}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
                {props.rows.map((row, index) => {
                    return (
                        <tr key={index}>
                            {row.map((r: any, index: number) => {
                                return <td key={index}>{r}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
);

export default UITable;
