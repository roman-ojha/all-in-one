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