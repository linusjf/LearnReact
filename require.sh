#!/usr/bin/env bash

######################################################################
# @author      : Linus Fernandes (linusfernandes at gmail dot com)
# @file        : require
# @created     : Wednesday Mar 20, 2024 11:44:50 IST
#
# @description :
######################################################################
require() {
  hash "$@" || exit
}
