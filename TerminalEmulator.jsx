import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, Minus, Square } from 'lucide-react';

// Known valid commands per language
const LANGS = {
  lua: {
    label: 'Lua',
    color: 'text-cyan_trace',
    prompt: '> ',
    commands: [
      'print', 'pairs', 'ipairs', 'next', 'type', 'tostring', 'tonumber',
      'require', 'pcall', 'xpcall', 'error', 'assert', 'rawget', 'rawset',
      'setmetatable', 'getmetatable', 'unpack', 'select', 'load', 'loadstring',
      'dofile', 'loadfile', 'collectgarbage', 'table.insert', 'table.remove',
      'table.sort', 'table.concat', 'string.format', 'string.find', 'string.sub',
      'string.len', 'string.upper', 'string.lower', 'string.rep', 'string.byte',
      'string.char', 'string.gmatch', 'string.gsub', 'math.floor', 'math.ceil',
      'math.abs', 'math.max', 'math.min', 'math.random', 'math.sqrt', 'math.pi',
      'io.write', 'io.read', 'os.time', 'os.clock', 'os.date',
      // Roblox specific
      'game', 'workspace', 'script', 'Instance.new', 'wait', 'task.wait',
      'task.spawn', 'task.delay', 'FireServer', 'InvokeServer', 'FindFirstChild',
      'GetService', 'WaitForChild', 'Destroy',
    ],
    keywords: ['local', 'function', 'end', 'if', 'then', 'else', 'elseif', 'for', 'do',
      'while', 'repeat', 'until', 'return', 'break', 'in', 'not', 'and', 'or',
 
