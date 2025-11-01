#!/usr/bin/env node

import { playGame } from '../src/cli.js'
import { PrimeGame } from '../src/games/prime.js'

playGame(PrimeGame)
