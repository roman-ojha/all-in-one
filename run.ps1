if($args -eq "activate"){
    # For Python venv Activate
    cd "./django/venv/bin"
    ./activate.ps1
    cd "../../../"
}
elseif($args -eq "deactivate"){
    # For Python venv Dactivate
    cd "./django/venv/bin"
    deactivate
    cd "../../../"
}
elseif($args[0] -eq "adb"){
    # connect adb android wirelessly
    $str1=$args[1]
    $str2=":5555"
    $final=$str1+$str2
    adb tcpip 5555
    adb connect $final
}