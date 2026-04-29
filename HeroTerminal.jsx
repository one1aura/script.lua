import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CODE_LINES = [
  '-- SYNTAX_OVERRIDE // Injection Module v4.2',
  'local Players = game:GetService("Players")',
  'local RunService = game:GetService("RunService")',
  'local HttpService = game:GetService("HttpService")',
  '',
  'local CONFIG = {',
  '    bypass_enabled = true,',
  '    hook_depth = 3,',
  '    stealth_mode = "AGGRESSIVE",',
  '    target_version = "618.0.2"',
  '}',
  '',
  'local function initHook(target, callback)',
  '    local old = hookfunction(target, callback)',
  '    if CONFIG.stealth_mode == "AGGRESSIVE" then',
  '        spoof_instance(target, old)',
  '    end',
  '    return old',
  'end',
  '',
  '-- Initialize bypass layer',
  'local bypass = loadstring(request({',
  '    Url = "https://syntax.ovrd/api/v4/hook",',
  '    Method = "GET",',
  '    Headers = {["Auth"] = getToken()}',
  '}).Body)()',
  '',
  'bypass:Execute(CONFIG)',
  'print("[SO] Hook initialized // Status: ACTIVE")',
];

f
