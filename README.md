# Knight of Travalis Problem
This repository contains a solution to the "Knight of Travalis" problem, which is a classic chess puzzle. In this puzzle, a knight is placed on a chess board and the goal is to visit each square on the board exactly once.

## Problem Statement
Given an n x n chess board, write a program to find a knight's tour that covers all the squares on the board. A knight's tour is a sequence of moves of a knight on a chessboard such that the knight visits every square only once.

## Solution
The solution to this problem is implemented using the backtracking algorithm. The basic idea is to start from a given cell, and keep moving the knight in all possible directions until a solution is found or all options have been exhausted. The program keeps track of the squares visited and if a square has already been visited, it backtracks to the previous square and tries the next option.
