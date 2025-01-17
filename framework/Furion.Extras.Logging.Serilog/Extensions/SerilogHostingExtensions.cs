// MIT 许可证
//
// 版权 © 2020-present 百小僧, 百签科技（广东）有限公司
//
// 特此免费授予任何获得本软件副本和相关文档文件（下称“软件”）的人不受限制地处置该软件的权利，
// 包括不受限制地使用、复制、修改、合并、发布、分发、转授许可和/或出售该软件副本，
// 以及再授权被配发了本软件的人如上的权利，须在下列条件下：
//
// 上述版权声明和本许可声明应包含在该软件的所有副本或实质成分中。
//
// 本软件是“如此”提供的，没有任何形式的明示或暗示的保证，包括但不限于对适销性、特定用途的适用性和不侵权的保证。
// 在任何情况下，作者或版权持有人都不对任何索赔、损害或其他责任负责，无论这些追责来自合同、侵权或其它行为中，
// 还是产生于、源于或有关于本软件以及本软件的使用或其它处置。

#if !NET5_0
using Microsoft.AspNetCore.Builder;
#endif

using Microsoft.AspNetCore.Hosting;
using Serilog;
using Serilog.Events;
using System.Reflection;
using System.Text;

namespace Microsoft.Extensions.Hosting;

/// <summary>
/// Serilog 日志拓展
/// </summary>
public static class SerilogHostingExtensions
{
    /// <summary>
    /// 添加默认日志拓展
    /// </summary>
    /// <param name="hostBuilder"></param>
    /// <param name="configAction"></param>
    /// <returns>IWebHostBuilder</returns>
#if !NET5_0
    [Obsolete("Prefer UseSerilog() on IHostBuilder")]
#endif

    public static IWebHostBuilder UseSerilogDefault(this IWebHostBuilder hostBuilder, Action<LoggerConfiguration> configAction = default)
    {
        // 判断是否是单文件环境
        var isSingleFileEnvironment = string.IsNullOrWhiteSpace(Assembly.GetEntryAssembly().Location);

#if !NET8_0
        hostBuilder.UseSerilog((context, configuration) =>
        {
            // 加载配置文件
            var config = configuration
            .ReadFrom.Configuration(context.Configuration)
            .Enrich.FromLogContext();

            if (configAction != null) configAction.Invoke(config);
            else
            {
                // 判断是否有输出配置
                var hasWriteTo = context.Configuration["Serilog:WriteTo:0:Name"];
                if (hasWriteTo == null)
                {
                    config.WriteTo.Console(outputTemplate: "[{Timestamp:HH:mm:ss} {Level:u3}] {Message:lj} {Properties:j}{NewLine}{Exception}")
                      .WriteTo.File(Path.Combine(!isSingleFileEnvironment ? AppDomain.CurrentDomain.BaseDirectory : AppContext.BaseDirectory, "logs", "application..log"), LogEventLevel.Information, rollingInterval: RollingInterval.Day, retainedFileCountLimit: null, encoding: Encoding.UTF8);
                }
            }
        });
#endif

        return hostBuilder;
    }

    /// <summary>
    /// 添加默认日志拓展
    /// </summary>
    /// <param name="builder"></param>
    /// <param name="configAction"></param>
    /// <returns></returns>
    public static IHostBuilder UseSerilogDefault(this IHostBuilder builder, Action<LoggerConfiguration> configAction = default)
    {
        // 判断是否是单文件环境
        var isSingleFileEnvironment = string.IsNullOrWhiteSpace(Assembly.GetEntryAssembly().Location);

        builder.UseSerilog((context, configuration) =>
        {
            // 加载配置文件
            var config = configuration
            .ReadFrom.Configuration(context.Configuration)
            .Enrich.FromLogContext();

            if (configAction != null) configAction.Invoke(config);
            else
            {
                // 判断是否有输出配置
                var hasWriteTo = context.Configuration["Serilog:WriteTo:0:Name"];
                if (hasWriteTo == null)
                {
                    config.WriteTo.Console(outputTemplate: "[{Timestamp:HH:mm:ss} {Level:u3}] {Message:lj} {Properties:j}{NewLine}{Exception}")
                      .WriteTo.File(Path.Combine(!isSingleFileEnvironment ? AppDomain.CurrentDomain.BaseDirectory : AppContext.BaseDirectory, "logs", "application..log"), LogEventLevel.Information, rollingInterval: RollingInterval.Day, retainedFileCountLimit: null, encoding: Encoding.UTF8);
                }
            }
        });

        return builder;
    }

#if !NET5_0
    /// <summary>
    /// 添加默认日志拓展
    /// </summary>
    /// <param name="builder"></param>
    /// <param name="configAction"></param>
    /// <returns></returns>
    public static WebApplicationBuilder UseSerilogDefault(this WebApplicationBuilder builder, Action<LoggerConfiguration> configAction = default)
    {
        builder.Host.UseSerilogDefault(configAction);

        return builder;
    }
#endif
}