PAGES_LINK="https://eamorozova.github.io/bspbTestingFramework"
TEXT="Тестирование выполнено: %0A%0AProject: $GITHUB_SERVER_URL/$GITHUB_REPOSITORY%0ABranch:+$GITHUB_REF%0A%0AОтчёт доступен по ссылке:%0A$PAGES_LINK"
curl -s -X POST https://api.telegram.org/$TELEGRAM_BOT_TOKEN/sendMessage -d chat_id=$TELEGRAM_GROUP_ID -d text="$TEXT"
