#!/usr/bin/env node

import { playGame } from '../src/cli.js'
import { ProgressionGame } from '../src/games/progression.js'

playGame(ProgressionGame)
