#!/usr/bin/env bash

while :
do
    counter=86399
    echo
    echo $(date)
    #printf "Running ${LCYAN}${function}${NC} vault ${YELLOW}#${vault_id}${NC} on ${LGREEN}${network_id}${NC}\n"
    echo
    node main.js
    echo
    # SE - Send vault status to Telegram
    #./send-telegram.sh
    while [ $counter -gt -1 ]
    do
        echo Waiting $counter seconds
        counter=$(( $counter - 1 ))
        sleep 1
    done
done
