export interface ITestTs {
    test1: number;
    test2: number[];
}

export type TTestTsResult = number[];

export const doTestTS = (secondOperand: ITestTs["test1"], firstOperands: ITestTs["test2"]): TTestTsResult => firstOperands.map(operand => operand * secondOperand);
