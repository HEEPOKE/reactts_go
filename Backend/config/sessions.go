package config

func Session() {
	store := gormsessions.NewStore(config.Database(), true, []byte("secret"))
}
