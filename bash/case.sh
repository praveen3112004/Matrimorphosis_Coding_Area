#!/bin/bash

read -p "Enter a number between 1 and 10: " num
case ${num} in
	2 | 3 | 5 | 7)
		echo "${num} is a prime number"
		;;
	1 | 4 | 6 | 8 | 9 )
		echo "${num} is not a prime number"
		;;
	*)
		echo "${num} is not a valid input"
		;;
esac
