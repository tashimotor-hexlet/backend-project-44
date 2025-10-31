#!/usr/bin/env node

import { playGame } from '../src/cli.js'
import { CalcGame } from '../src/games/calc.js'

playGame(CalcGame)
