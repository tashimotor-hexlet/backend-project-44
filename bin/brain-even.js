#!/usr/bin/env node

import { playGame } from '../src/cli.js'
import { EvenGame } from '../src/games/even.js'

playGame(EvenGame)
