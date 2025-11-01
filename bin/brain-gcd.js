#!/usr/bin/env node

import { playGame } from '../src/cli.js'
import { GcdGame } from '../src/games/gcd.js'

playGame(GcdGame)
