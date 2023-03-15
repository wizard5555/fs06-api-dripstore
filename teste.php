<?php

$senha = 'pudim';

// $hash = password_hash($senha, PASSWORD_ARGON2I);

// echo $hash;

$hash = '$argon2i$v=19$m=65536,t=4,p=1$b3dlanJSU2pGcHM1NVVvLw$PvOUYvh+5J9PHmT/tN45a/MpTC7qJFNqLHYeWxNQhVI';

if (password_verify('pudim', $hash)) {
    echo "igual";
} else {
    echo "diferente";
}
