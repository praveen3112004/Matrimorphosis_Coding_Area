#!/bin/bash

# This function turns a number into its word representation
to_words() {
    local num=$1
    if [ $num -eq 100 ]; then
        echo "hundred"
        return
    fi

    if [ $num -lt 20 ]; then
        # CORRECTED SECTION: Added patterns like 1), 2), etc.
        case $num in
            1) echo "one";;
            2) echo "two";;
            3) echo "three";;
            4) echo "four";;
            5) echo "five";;
            6) echo "six";;
            7) echo "seven";;
            8) echo "eight";;
            9) echo "nine";;
            10) echo "ten";;
            11) echo "eleven";;
            12) echo "twelve";;
            13) echo "thirteen";;
            14) echo "fourteen";;
            15) echo "fifteen";;
            16) echo "sixteen";;
            17) echo "seventeen";;
            18) echo "eighteen";;
            19) echo "nineteen";;
        esac
    else
        local tens=$(( $num / 10 ))
        local ones=$(( $num % 10 ))

        case $tens in
            2) echo -n "twenty";;
            3) echo -n "thirty";;
            4) echo -n "forty";;
            5) echo -n "fifty";;
            6) echo -n "sixty";;
            7) echo -n "seventy";;
            8) echo -n "eighty";;
            9) echo -n "ninety";;
        esac

        if [ $ones -ne 0 ]; then
            echo -n " "
            to_words $ones
        fi
    fi
}

# Loop from 1 to 100 and print the results
for i in {1..100}; do
  echo "$i $(to_words $i)"
done

