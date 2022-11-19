package cmd

import (
	"fmt"
	"os"

	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

var rootCmd = &cobra.Command{
	Use:   "devhacks",
	Short: "Devhacks is a collection of tools for developers",
}

func init() {
	cobra.OnInitialize(readConfig)
	rootCmd.AddCommand(generateCmd)
	rootCmd.AddCommand(serveCmd)
}

func readConfig() {
	viper.SetConfigName("config")
	viper.SetDefault("POCKETBASE_EMAIL", "dev@hacks.com")
	viper.SetDefault("POCKETBASE_PASSWORD", "devhacks2022")
}

func Execute() {
	if err := rootCmd.Execute(); err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
}
